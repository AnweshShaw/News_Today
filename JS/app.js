const apiKey = '40bfa137152c4fd19fa9717b52a504df';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const businessUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
const techUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`;
const entertainmentUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`;
const scienceUrl = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${apiKey}`;
const sportsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
const healthUrl = `https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=${apiKey}`;


async function getNews() 
{
  const response = await fetch(apiUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('news');

  news.forEach((article) => {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function BusinessNews() 
{
  const response = await fetch(businessUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('business_news');

  news.forEach((article) => {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function TechNews() 
{
  const response = await fetch(techUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('tech_news');

  news.forEach((article) => 
  {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function Entertainment_News() 
{
  const response = await fetch(entertainmentUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('entertainment_news');

  news.forEach((article) => 
  {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function ScienceNews() 
{
  const response = await fetch(scienceUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('science_news');

  news.forEach((article) => 
  {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function SportsNews() 
{
  const response = await fetch(sportsUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('sports_news');

  news.forEach((article) => 
  {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

async function HealthNews() 
{
  const response = await fetch(healthUrl);
  const data = await response.json();
  const news = data.articles;

  const newsContainer = document.getElementById('health_news');

  news.forEach((article) => 
  {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const descriptionElement = document.createElement('p');
    const linkElement = document.createElement('a');

    titleElement.innerText = article.title;
    descriptionElement.innerText = article.description;
    linkElement.innerText = 'Read more';
    linkElement.href = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    newsContainer.appendChild(articleElement);
  });
}

getNews();
BusinessNews();
TechNews();
Entertainment_News();
ScienceNews();
SportsNews();
HealthNews();




