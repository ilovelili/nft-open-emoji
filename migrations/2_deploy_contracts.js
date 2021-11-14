const OpenEmoji = artifacts.require("OpenEmoji");

module.exports = async function (deployer) {
	const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_IMAGE_METADATA_CID}/`;
	// todo:revert
	// const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`;
	const IPFS_HIDDEN_IMAGE_METADATA_URI = ``;

	const NFT_MINT_DATE = new Date(process.env.NFT_MINT_DATE).getTime().toString().slice(0, 10);

	await deployer.deploy(
		OpenEmoji,
		process.env.PROJECT_NAME,
		process.env.PROJECT_SYMBOL,
		IPFS_IMAGE_METADATA_URI,
		IPFS_HIDDEN_IMAGE_METADATA_URI,
		NFT_MINT_DATE
	);
};
