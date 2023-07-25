import {
  CheckBadgeIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

import {
  ArrowsRightLeftIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon } from "@heroicons/react/24/solid";

import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative">
      <Head>
        <title>Threads, an Instagram app</title>

        <meta
          name="description"
          content="Say more with Threads — Instagram's new text app."
        />

        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <header className="py-2 flex items-center justify-center">
        <Link href="/">
          <img className="dark:invert" src="/assets/logo.svg" alt="Threads" />
        </Link>
      </header>

      <div className="border-b border-gray-300 dark:border-zinc-700">
        <div className="px-2.5 py-5">
          <div className="flex items-start gap-x-3">
            <div className="space-y-1.5">
              <button>
                <img
                  className="h-12 w-12 rounded-full"
                  src="/assets/avatars/zuck.jpg"
                  alt="Mark Zuckerberg"
                />
              </button>

              <div className="mx-auto w-0.5 h-14 bg-gray-200 dark:bg-zinc-700"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="font-semibold">zuck</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-gray-400 dark:text-zinc-500">33m</h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm font-medium">
                10 million sign ups in seven hours.
              </p>

              <div className="mt-2.5 flex gap-x-4">
                <button>
                  <HeartIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ArrowsRightLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <PaperAirplaneIcon className="h-5 w-5 stroke-2" />
                </button>
              </div>

              <div className="mt-2.5 text-gray-400 dark:text-zinc-500">
                26 replies • 112 likes
              </div>
            </div>
          </div>
        </div>

        <div className="px-2.5 pb-5">
          <div className="flex items-start gap-x-3">
            <div className="space-y-1.5">
              <button>
                <img
                  className="h-12 w-12 rounded-full"
                  src="/assets/avatars/elon-musk.jpg"
                  alt="Elon Musk"
                />
              </button>

              <div className="mx-auto w-0.5 h-10 bg-gray-200 dark:bg-zinc-700"></div>

              <div className="flex justify-center">
                <img
                  className="-mx-1 h-5 w-5 bg-yellow-300 dark:bg-yellow-600 rounded-full border-2 border-white dark:border-zinc-950"
                  src="/assets/avatars/mattew.svg"
                  alt=""
                />

                <img
                  className="-mx-1 h-5 w-5 bg-green-300 dark:bg-green-600 rounded-full border-2 border-white dark:border-zinc-950"
                  src="/assets/avatars/michael.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="font-semibold">elonmusk</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-gray-400 dark:text-zinc-500">33m</h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm font-medium">👍</p>

              <div className="mt-2.5 flex gap-x-4">
                <button>
                  <HeartIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ArrowsRightLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <PaperAirplaneIcon className="h-5 w-5 stroke-2" />
                </button>
              </div>

              <div className="mt-2.5 text-gray-400 dark:text-zinc-500">
                26 replies • 112 likes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 dark:border-zinc-700">
        <div className="px-2.5 py-5">
          <div className="flex items-start gap-x-3">
            <div className="space-y-1.5">
              <button>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg"
                  alt=""
                />
              </button>

              <div className="mx-auto w-0.5 h-64 bg-gray-200 dark:bg-zinc-700"></div>

              <div className="flex justify-center">
                <img
                  className="-mx-1 h-5 w-5 bg-blue-300 dark:bg-blue-600 rounded-full border-2 border-white dark:border-zinc-950"
                  src="/assets/avatars/justin.svg"
                  alt=""
                />

                <img
                  className="-mx-1 h-5 w-5 bg-red-300 dark:bg-red-600 rounded-full border-2 border-white dark:border-zinc-950"
                  src="/assets/avatars/ed.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="font-semibold">archillect</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-gray-400 dark:text-zinc-500">33m</h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm font-medium">hey, threads 👀</p>

              <div className="mt-2 snap-x snap-mandatory overflow-auto flex gap-x-2.5">
                <img
                  className="rounded-lg snap-center"
                  src="https://images.unsplash.com/photo-1517933981816-1f2d0c2ffc0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <img
                  className="rounded-lg snap-center"
                  src="https://images.unsplash.com/photo-1526109753379-32666ca7fe2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>

              <div className="mt-2.5 flex gap-x-4">
                <button>
                  <HeartIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <ArrowsRightLeftIcon className="h-5 w-5 stroke-2" />
                </button>

                <button>
                  <PaperAirplaneIcon className="h-5 w-5 stroke-2" />
                </button>
              </div>

              <div className="mt-2.5 text-gray-400 dark:text-zinc-500">
                26 replies • 112 likes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 sticky w-full bottom-0 py-6 bg-white dark:bg-zinc-950 border-t border-gray-300 dark:border-zinc-700">
        <footer className="px-12 flex justify-between">
          <button>
            <HomeIcon className="h-6 w-6 stroke-2 text-black dark:text-white" />
          </button>

          <button>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 dark:text-zinc-500 stroke-2" />
          </button>

          <button>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 dark:text-zinc-500 stroke-2" />
          </button>

          <button>
            <HeartIcon className="h-6 w-6 text-gray-400 dark:text-zinc-500 stroke-2" />
          </button>

          <button>
            <UserIcon className="h-6 w-6 text-gray-400 dark:text-zinc-500 stroke-2" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Home;
