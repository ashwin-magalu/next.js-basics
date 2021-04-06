//import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home ( { articles } ) {
  return (
    <div>
      {/* <Head>
        <title>Home Page</title>
        <meta name="keywords" content="web development, programming"/>
      </Head> */}
      <h1>Welcome to Next.js</h1>
        <ArticleList articles={articles} />
    </div>
  )
}

/* 
getStaticProps --> fetch data at build time 
getServerSideProps --> fetch data at every request, this is bit slower
getStaticPaths --> to dynamically generate paths based on the data we are fetching, it uses getStaticProps 
*/

/* For fetching from different API */
/* export const getStaticProps = async () => {
  const res = await fetch( `https://jsonplaceholder.typicode.com/posts?_limit=6` );
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
} */

/* For fetching from our own API */
export const getStaticProps = async () => {
	const res = await fetch(
		`${server}/api/articles`
	);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};