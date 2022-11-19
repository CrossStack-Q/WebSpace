import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-[90vh] sm:h-[50vh]  snap-mandatory snap-y snap-center bg-black z-0'>
        <div className='max-w-[100vw] sm:p-0 p-8 text-white mx-auto sm:max-w-[80vw] h-full flex flex-col sm:flex-row'>
            <section className='flex flex-col gap-2'>
                <span className='text-xl font-semibold'>
                Weekend Builds
                </span>
                <p className='text-zinc-400'>Build you own AI writer</p>
                <p className='text-zinc-400'>ENS</p>
                <p className='text-zinc-400'>Solidity</p>
                <p className='text-zinc-400'>Ethereum NFT</p>
                <p className='text-zinc-400'>Solana Web3 App</p>
                <p className='text-zinc-400'>DAOs</p>
                <p className='text-zinc-400'>NFT Game</p>
            </section>
            <section className='flex flex-col gap-2 mt-8 sm:mt-0'>
                <span className='text-xl font-semibold'>
                    Level Up
                </span>
                <p className='text-zinc-400'>Solana Core</p>
                <p className='text-zinc-400'>Nights & Weekends</p>
            </section>
            <section className='flex flex-col gap-2 mt-8 sm:mt-0'>
                <span className='text-xl font-semibold'>
                    Made By
                </span>
                <p className='text-zinc-400'>Saitama</p>
                <p className='text-zinc-400'>AsyncAlpha</p>
            </section>
        </div>
    </div>
  )
}

export default Footer