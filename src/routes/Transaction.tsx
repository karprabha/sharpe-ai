import { useEffect, useRef, useState } from "react";

const WALLET_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const AMOUNT_REGEX = /^(0|[1-9]\d{0,3})(\.\d{1,2})?$/;

const Transaction = () => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [walletAddress, setWalletAddress] = useState("");
    const [validWalletAddress, setValidWalletAddress] = useState(false);
    const [walletAddressFocus, setWalletAddressFocus] = useState(false);

    const [amount, setAmount] = useState("");
    const [validAmount, setValidAmount] = useState(false);
    const [amountFocus, setAmountFocus] = useState(false);

    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        setValidAmount(WALLET_ADDRESS_REGEX.test(amount));
    }, [amount]);

    useEffect(() => {
        setValidWalletAddress(AMOUNT_REGEX.test(walletAddress));
    }, [walletAddress]);

    useEffect(() => {
        setErrorMessages([]);
    }, [amount, walletAddress]);

    const handleTransaction = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
    };

    return (
        <div className="flex my-20 items-center justify-center h-full bg-gray-100 mx-4">
            <div className="bg-white w-full max-w-sm box-border p-8 rounded-lg shadow-lg">
                <div ref={errRef}>
                    {errorMessages.map((errorMessage, index) => (
                        <p
                            key={index}
                            className="text-red-500 bg-red-100 p-2 rounded mb-4 text-center"
                            aria-live="assertive"
                        >
                            {errorMessage}
                        </p>
                    ))}
                </div>
                <h2 className="text-2xl text-center mb-4">Transaction</h2>
                <form onSubmit={handleTransaction}>
                    <div className="mb-4">
                        <label
                            htmlFor="first_name"
                            className="block text-gray-600 text-sm font-medium mb-2"
                        >
                            Wallet Address
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            ref={userRef}
                            autoComplete="off"
                            name="first_name"
                            className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none ${
                                !validAmount && amount ? "border-red-500" : ""
                            }`}
                            placeholder="Wallet Address"
                            required
                            aria-invalid={validAmount ? "false" : "true"}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onFocus={() => setAmountFocus(true)}
                            onBlur={() => setAmountFocus(false)}
                        />

                        <p
                            id="firstnamenote"
                            className={
                                amountFocus && amount && !validAmount
                                    ? "bg-red-100 text-red-500 text-sm rounded p-2 mt-2"
                                    : "sr-only"
                            }
                        >
                            Length: 42 characters (including "0x").
                            <br />
                            Begin with "0x"
                            <br />
                            Followed by 40 hexadecimal characters.
                        </p>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="family_name"
                            className="block text-gray-600 text-sm font-medium mb-2"
                        >
                            Amount
                        </label>
                        <input
                            type="text"
                            id="family_name"
                            autoComplete="off"
                            name="family_name"
                            className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none ${
                                !validWalletAddress && walletAddress
                                    ? "border-red-500"
                                    : ""
                            }`}
                            placeholder="Amount"
                            required
                            aria-invalid={validWalletAddress ? "false" : "true"}
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                            onFocus={() => setWalletAddressFocus(true)}
                            onBlur={() => setWalletAddressFocus(false)}
                        />

                        <p
                            id="familynamenote"
                            className={
                                walletAddressFocus && !validWalletAddress
                                    ? "bg-red-100 text-red-500 text-sm rounded p-2 mt-2"
                                    : "sr-only"
                            }
                        >
                            Should be a number.
                            <br />
                            Decimal values are optional, up to two decimal
                            places.
                            <br />
                            Must be within the range of 0 to 10,000.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 rounded-md text-white ${
                            !validAmount || !validWalletAddress
                                ? "bg-gray-300 cursor-not-allowed opacity-50"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        disabled={
                            !validAmount || !validWalletAddress ? true : false
                        }
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Transaction;
