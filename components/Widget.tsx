'use client';

import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget } from '@lifi/widget';
import type { ReactNode } from 'react';
import { ClientOnly } from './ClientOnly';
import { ChainId } from '@lifi/sdk';

interface WidgetProps {
  fallback: ReactNode;
  config: Partial<WidgetConfig>;
}

export function Widget({ fallback }: WidgetProps) {
  const config: Partial<WidgetConfig> = {
    fee: 0.003,
    variant: "compact",
    subvariant: "split",
    appearance: "dark",
    theme: {
    },
    sdkConfig: {
      rpcUrls: {
        [ChainId.SOL]: [
          'https://hidden-light-crater.solana-mainnet.quiknode.pro/51cebf53641c449ff8670b803f0b969cadbdd773',
        ],
      },
    },
  };

  return (
    <main>
      <ClientOnly fallback={fallback}>
        <div className='main-pan'>

          <img src="./BRIXO-LOGO.webp" alt="brixo logo" className='logo' />

          <LiFiWidget config={config} integrator="BrixoApp" />
          <div className='wallet-footer'>
            <h6>
              Bridge & DEX Aggregation Protocol
            </h6>
            <p>
              Trade all DeFi liquidity from one place, <br /> across any chain to any chain.
            </p>
            <div className='copyright'>
              <p>© 2024 Integrated by Brixo, Inc.</p>
              <img src="./Brixo_fav.webp" alt="brixo faicon" />
            </div>
          </div>
        </div>
      </ClientOnly>
    </main>
  );
}
