document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profile-image');
    const name = document.getElementById('profile-name');
    const username = document.getElementById('profile-username');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const linkGithub = document.getElementById('link-github');

    fetch('https://api.github.com/users/lucazmenezez')
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error('Nome de usuário não encontrado');
            }
            return resposta.json();
        })
        .then(function(json) {
            profileImage.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            linkGithub.href = json.html_url;
        })
        .catch(function(error) {
            alert('Ocorreu um erro ao buscar os dados, tente novamente mais tarde');
            console.error('Erro:', error);
        })
});