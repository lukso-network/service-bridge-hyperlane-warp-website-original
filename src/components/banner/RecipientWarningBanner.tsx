import { WarningIcon } from '@hyperlane-xyz/widgets';
import { useStore } from '../../features/store';

export function RecipientWarningBanner({
  isVisible,
  destinationChain,
}: {
  isVisible: boolean;
  destinationChain: string;
  className?: string;
}) {
  const store = useStore();

  return (
    <div
      className={`mt-3 gap-2 bg-amber-400 px-4 text-sm ${
        isVisible ? 'max-h-35 py-2' : 'max-h-0'
      } overflow-hidden transition-all duration-500`}
    >
      <div className="flex items-center gap-3">
        <WarningIcon width={40} height={40} />
        <div>
          <p className="my-2">
            The recipient address entered is the same as the connected smart contract wallet, but it
            does not exist as a smart contract on {destinationChain}.
          </p>
          <p className="my-2">This may result in losing access to your bridged tokens.</p>
          <p className="my-2">
            <strong>Double-check the recipient address before proceeding.</strong>
          </p>
          <div className="justify-left flex w-max gap-2 rounded bg-white/30 px-2.5 py-1 text-center hover:bg-white/50 active:bg-white/60">
            <input
              onChange={({ target: { checked } }) => store.setRecipientAddressConfirmed(checked)}
              type="checkbox"
              id="confirm-address"
              name="confirm-recipient"
            />
            <label htmlFor="confirm-address">I know what I am doing</label>
          </div>
        </div>
      </div>
    </div>
  );
}
