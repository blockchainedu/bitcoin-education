import React from "react";
import Mailchimp from 'react-mailchimp-form'

export default function CryptoDonateItem(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="text-center hover:bg-gray-50 duration-300 py-6 w-full m-auto"
                style={{ border: "1px dashed #CCCCCC", maxWidth: "200px" }}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <div className="font-bold text-xl font-mont">{props.name}<span className="font-light"> {props.tickerName}</span></div>
                <img className="m-auto pt-4" src={props.image} />
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-3 md:mx-0"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 pb-10 p-3 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 pt-0 rounded-t z-30">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 hover:bg-bengray-300 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-gray rounded-full h-3 w-3 text-black">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 pb-20 md:pb-0 flex gap-x-20 -mt-10 mb-8 items-center">
                                    <img className="w-24" src={props.image} />
                                    <div>
                                        <p className="text-xl font-mont font-medium">Send your donation</p>
                                        <p className="font-mont text-sm max-w-sm pt-4">To make a direct donation in {props.name} send {props.tickerName} to the address below.</p>

                                    </div>

                                </div>
                                <button
                                    className="flex mx-10 justify-between rounded-lg p-3 border border-benorange-500 bg-gray-50 duration-300"
                                    onClick={() => navigator.clipboard.writeText(`${props.address}`)}
                                    style={{ maxWidth: "600px" }}
                                >
                                    <div className="flex justify-between">
                                        {props.address}
                                    </div>
                                    <div>Copy</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="button-overlay opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}