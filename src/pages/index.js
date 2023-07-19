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

const Home = () => {
  return (
    <div className="relative">
      <Head>
        <title>Threads</title>

        <link
          rel="icon"
          href="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/_8T3PbCSTRI.png"
        />
      </Head>

      <header className="py-2 flex items-center justify-center">
        <svg
          className="dark:invert"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4312 16.2218C23.2805 16.1496 23.1273 16.08 22.9722 16.0134C22.7021 11.0356 19.9821 8.18581 15.4149 8.15664C15.3942 8.15651 15.3737 8.15651 15.353 8.15651C12.6212 8.15651 10.3493 9.32256 8.95089 11.4444L11.4627 13.1674C12.5073 11.5825 14.1468 11.2446 15.3542 11.2446C15.3681 11.2446 15.3821 11.2446 15.3959 11.2448C16.8997 11.2543 18.0345 11.6916 18.7689 12.5442C19.3034 13.165 19.6609 14.0228 19.8379 15.1054C18.5046 14.8788 17.0627 14.8091 15.5212 14.8975C11.179 15.1476 8.38744 17.6801 8.57493 21.1991C8.67007 22.9841 9.55932 24.5197 11.0788 25.5228C12.3635 26.3709 14.018 26.7856 15.7377 26.6917C18.0086 26.5672 19.7901 25.7008 21.033 24.1165C21.9769 22.9133 22.5739 21.3542 22.8375 19.3896C23.9198 20.0428 24.7218 20.9023 25.1648 21.9355C25.918 23.6919 25.962 26.5781 23.607 28.9311C21.5436 30.9925 19.0633 31.8843 15.315 31.9118C11.157 31.881 8.01241 30.5475 5.96788 27.9484C4.05335 25.5146 3.0639 21.9993 3.02699 17.5C3.0639 13.0006 4.05335 9.48529 5.96788 7.05153C8.01241 4.45246 11.157 3.11901 15.3149 3.08811C19.503 3.11925 22.7024 4.45911 24.8252 7.07073C25.8661 8.35144 26.6509 9.96202 27.1682 11.8399L30.1117 11.0546C29.4846 8.74311 28.4978 6.7513 27.1551 5.09943C24.4336 1.75122 20.4535 0.0355739 15.3252 0H15.3046C10.1868 0.0354503 6.25116 1.75762 3.60724 5.11862C1.25451 8.1095 0.0409063 12.2711 0.000127604 17.4877L0 17.5L0.000127604 17.5123C0.0409063 22.7289 1.25451 26.8906 3.60724 29.8814C6.25116 33.2423 10.1868 34.9646 15.3046 35H15.3252C19.8753 34.9685 23.0825 33.7772 25.7246 31.1374C29.1814 27.6839 29.0773 23.355 27.938 20.6976C27.1206 18.7919 25.5622 17.2441 23.4312 16.2218ZM15.5751 23.608C13.672 23.7152 11.6948 22.861 11.5973 21.0314C11.5251 19.6747 12.5628 18.161 15.6919 17.9807C16.0502 17.96 16.4019 17.9499 16.7473 17.9499C17.8839 17.9499 18.9472 18.0603 19.9139 18.2716C19.5533 22.7746 17.4384 23.5058 15.5751 23.608Z"
            fill="black"
          />
        </svg>
      </header>

      <div className="border-b border-gray-300 dark:border-zinc-600">
        <div className="px-2.5 py-5">
          <div className="flex items-start gap-x-3">
            <div className="space-y-1.5">
              <button>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/983694257277014016/1ODUhVr-_400x400.jpg"
                  alt=""
                />
              </button>

              <div className="mx-auto w-0.5 h-16 bg-gray-200 dark:bg-zinc-700"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="text-lg font-bold">zuck</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-lg text-gray-400 dark:text-zinc-500">
                    33m
                  </h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-lg font-medium">
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

              <div className="mt-2.5 text-lg text-gray-400 dark:text-zinc-500">
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
                  src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                  alt=""
                />
              </button>

              <div className="mx-auto w-0.5 h-12 bg-gray-200 dark:bg-zinc-700"></div>

              <div className="flex justify-center">
                <img
                  className="-mx-1 h-5 w-5 bg-yellow-300 dark:bg-yellow-600 rounded-full border-2 border-white dark:border-zinc-900"
                  src="/assets/mattew.svg"
                  alt=""
                />

                <img
                  className="-mx-1 h-5 w-5 bg-green-300 dark:bg-green-600 rounded-full border-2 border-white dark:border-zinc-900"
                  src="/assets/michael.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="text-lg font-bold">elonmusk</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-lg text-gray-400 dark:text-zinc-500">
                    33m
                  </h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-lg font-medium">👍</p>

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

              <div className="mt-2.5 text-lg text-gray-400 dark:text-zinc-500">
                26 replies • 112 likes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 dark:border-zinc-600">
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
                  className="-mx-1 h-5 w-5 bg-blue-300 dark:bg-blue-600 rounded-full border-2 border-white dark:border-zinc-900"
                  src="/assets/justin.svg"
                  alt=""
                />

                <img
                  className="-mx-1 h-5 w-5 bg-red-300 dark:bg-red-600 rounded-full border-2 border-white dark:border-zinc-900"
                  src="/assets/ed.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1.5">
                  <h5 className="text-lg font-bold">archillect</h5>

                  <CheckBadgeIcon className="h-4 w-4 text-sky-500" />
                </div>

                <div className="flex items-center gap-x-5">
                  <h6 className="text-lg text-gray-400 dark:text-zinc-500">
                    33m
                  </h6>

                  <button>
                    <EllipsisHorizontalIcon className="w-4 stroke-2" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-lg font-medium">hey, threads 👀</p>

              <div className="mt-2 overflow-auto flex gap-x-2.5">
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1517933981816-1f2d0c2ffc0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <img
                  className="rounded-lg"
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

              <div className="mt-2.5 text-lg text-gray-400 dark:text-zinc-500">
                26 replies • 112 likes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 sticky w-full bottom-0 py-6 bg-white dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-600">
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
