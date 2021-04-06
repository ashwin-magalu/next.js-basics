import { useRouter } from "next/router"
import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = ({article}) => {
    const router = useRouter()
    const {id} = router.query
    

    return (
			<>
				<Meta
					title={article.title}
					keywords=""
					description={article.body}
				/>
				<h4>{article.title}</h4>
				<p>{article.body}</p>
				<br />
				<Link href="/">
					<button>Go back</button>
				</Link>
			</>
		);
}

export default article

/* export const getServerSideProps = async (context) => {
    const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${ context.params.id }` );
    const article = await res.json();

    return {
        props: {
            article
        }
    }
} */

/* or */

/* For fetching from different API */
/* export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
    const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts`
		);
    const articles = await res.json();

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
            paths,
            fallback: false, // if data is not there, it will show 404 page
    }
} */

/* For fetching from our own API */
export const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false, // if data is not there, it will show 404 page
	};
};