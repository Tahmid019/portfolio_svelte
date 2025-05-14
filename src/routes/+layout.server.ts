export async function load() {
    try {
        const res = await fetch('https://api.github.com/repos/Tahmid019/portfolio_svelte/commits/main');
        
        // Handle non-2xx responses
        if (!res.ok) {
            throw new Error(`GitHub API request failed: ${res.statusText}`);
        }
        
        const json = await res.json();
        
        // Check if commit data exists
        if (!json.commit || !json.commit.committer || !json.commit.committer.date) {
            throw new Error('Date field is missing in the commit data');
        }
        
        const date = new Date(json.commit.committer.date);
        const lastUpdated = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        return { lastUpdated };
    } catch (error) {
        console.error('Error loading data:', error);
        return { lastUpdated: 'Error fetching data' };
    }
}
