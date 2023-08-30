const user = 'sameer2002';

// Fetch all repositories for the user
fetch(`https://api.github.com/users/${user}/repos`)
  .then(response => response.json())
  .then(data => {
    
    displayRepoDetails(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

/*function populateRepoList(repos) {
  const repoList = document.getElementById('repo-list');
  
  repos.forEach(repo => {
    const option = document.createElement('option');
    option.value = repo.name;
    option.textContent = repo.name;
    repoList.appendChild(option);
  });

  // Add an event listener to the dropdown to display repo details
  repoList.addEventListener('change', (event) => {
    const selectedRepoName = event.target.value;
    const selectedRepo = repos.find(repo => repo.name === selectedRepoName);
    displayRepoDetails(selectedRepo);
  });
}*/
const repoDiv = document.getElementById('repo-details');
function displayRepoDetails(data) {
  
  
data.forEach(repo => {
    const card=document.createElement('div');
    card.innerHTML = `
    <h2>${repo.name}</h2>
    <p>${repo.description}</p>
    <a href="https://sameer2002.github.io/${repo.name}/">${repo.html_url} </a>
    <strong>Forks: </strong>${repo.forks_count} <br>
    <strong>Open Issues: </strong>${repo.open_issues_count}
  `;
  repoDiv.appendChild(card);
});
}
