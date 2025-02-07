import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function useWalletAddress() {
    const { address, isConnected } = useAccount();

    return {
        address,
        isConnected
    };
} 