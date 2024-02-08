import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import Modal from './Modal'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <Disclosure as="nav" className="bg-zinc-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0 items-center">
                                <a href="/">
                                    <img
                                        className="h-8 w-auto"
                                        src="./logo.png"
                                        alt="Your Company"
                                    />
                                </a>
                            </div>

                            {/* Navigation */}
                            <div className="hidden sm:flex sm:ml-6 gap-3">
                                <Toaster />
                                <Modal showModal={showModal} toggleModal={toggleModal} />
                                <a
                                    onClick={toggleModal}
                                    className={classNames('bg-pink-400 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                                >
                                    About
                                </a>
                                <a
                                    onClick={() => toast.message(<strong>Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)</strong>)}
                                    className={classNames('bg-cyan-500 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                                >
                                    Licenses
                                </a>
                                <a
                                    href="https://github.com/mvrxs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classNames('bg-yellow-400 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                                >
                                    <div className="flex items-center">
                                        <img
                                            alt="GitHub logo"
                                            className="h-5 w-5 mr-2"
                                            height="20"
                                            src="./github.svg"
                                            width="20"
                                        />
                                        GitHub
                                    </div>
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Disclosure.Panel className="sm:hidden">
                    <Toaster />
                    <Modal showModal={showModal} toggleModal={toggleModal} />
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a
                                onClick={toggleModal}
                                className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium')}
                            >
                                About
                            </a>
                            <a
                                onClick={() => toast.message(<strong>Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)</strong>)}
                                className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium')}
                            >
                                Licenses
                            </a>
                            <a
                                href="https://github.com/mvrxs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium')}
                            >
                                GitHub
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
