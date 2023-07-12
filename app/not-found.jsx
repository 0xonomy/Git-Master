import "/styles/404.css"
import Link from "next/link"

const NotFound = () => {
	return (
		<div className="container">
			<div className="404">
				<p>Cannot find page like this, you sure you got the right url?</p>
				<p>You can go back to <Link href="/" className="home-link">home</Link> if you want</p>
			</div>
		</div>
	)
}

export default NotFound;