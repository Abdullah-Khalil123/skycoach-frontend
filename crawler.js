// crawler.js
import axios from 'axios';
import cheerio from 'cheerio';

async function crawl(url) {
  try {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const $ = cheerio.load(data);

    console.log('Page Title:', $('title').text());
    console.log(
      'Meta Description:',
      $('meta[name="description"]').attr('content')
    );
    console.log(
      'Headings:',
      $('h1,h2,h3')
        .map((i, el) => $(el).text().trim())
        .get()
    );
    console.log(
      'Links:',
      $('a')
        .map((i, el) => $(el).attr('href'))
        .get()
    );
  } catch (err) {
    console.error('Error:', err.message);
  }
}

crawl('https://skycoach-frontend.vercel.app/');
