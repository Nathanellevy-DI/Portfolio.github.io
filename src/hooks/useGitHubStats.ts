import { useState, useEffect } from 'react';

interface GitHubStats {
    followers: number;
    publicRepos: number;
    totalStars: number;
    loading: boolean;
    error: string | null;
}

export const useGitHubStats = (username: string) => {
    const [stats, setStats] = useState<GitHubStats>({
        followers: 0,
        publicRepos: 0,
        totalStars: 0,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch user data
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                if (!userRes.ok) throw new Error('Failed to fetch user data');
                const userData = await userRes.json();

                // Fetch repos to count stars (limited to 100 for simple auth-less fetch)
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposRes.ok) throw new Error('Failed to fetch repos');
                const reposData = await reposRes.json();

                const stars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

                setStats({
                    followers: userData.followers,
                    publicRepos: userData.public_repos,
                    totalStars: stars,
                    loading: false,
                    error: null,
                });
            } catch (err: any) {
                setStats(prev => ({ ...prev, loading: false, error: err.message }));
            }
        };

        fetchStats();
    }, [username]);

    return stats;
};
