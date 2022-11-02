import React from 'react';
import NFTCard from '../NftCard';

export default function NftList() {
  return (
    <>
      <NFTCard name="NFT Name" no_of_owners="4K" volume="80K" floor="0.06" symbol="ETH" />
      <NFTCard name="NFT Name" no_of_owners="2K" volume="10K" floor="1" symbol="BTC" />
    </>
  );
}
