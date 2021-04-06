import headerStyles from "../styles/Header.module.css"

const Header = () => {
    // const x = 5;

    return (
			<div>
				<h1 className={headerStyles.title}>
					<span>Next.js</span> Basics
				</h1>
				<p className={headerStyles.description}>
					Learn everyday, learning never stops
				</p>
				{/* <h1 className="title"><span>Next.js</span> Basics</h1>
                <style jsx>
                    { `
                        .title {
                            color: ${x > 3 ? "red" : "blue"};
                        }
                    `}
                </style> */}
			</div>
		);
}

export default Header
