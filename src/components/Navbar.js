const Navbar = () => {
	return (
		<nav className="navbar fixed-top mx-3">
			<button onClick={connectHandler} className="button nav-button btn-sm mx-4">
				Connect Wallet
			</button>
		</nav>
	);
};

export default Navbar;
