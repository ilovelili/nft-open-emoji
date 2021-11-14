#!/usr/bin/env bash
network=$1

echo "Network: $network"

truffle migrate --reset --network $network

# Verify Contracts on Etherscan
truffle run verify OpenEmoji --network $network --license SPDX-License-Identifier

# Flatten Contracts
./node_modules/.bin/truffle-flattener src/contracts/OpenEmoji.sol > src/flats/OpenEmoji_flat.sol