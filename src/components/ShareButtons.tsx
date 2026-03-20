"use client";
import { Facebook, Link, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";

interface ShareButtonsProps {
    url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url }) => {
    return (
        <div className="flex gap-4 mt-8 items-center justify-end">
            <span className="font-semibold my-auto">SHARE CASE STUDY:</span>
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="hover:opacity-70 bg-[#F5F5F5] rounded-full p-2"
            >
                <Facebook size={20} fill="black" />
            </a>
            <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="hover:opacity-70 bg-[#F5F5F5] rounded-full p-2"
            >
                <svg width="20" height="20" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8795 17.7726L10.8351 8.04321L16.7994 1.32323C16.9343 1.16749 17.0038 0.963573 16.9929 0.755686C16.982 0.547799 16.8915 0.352698 16.7411 0.212682C16.5906 0.0726654 16.3924 -0.00098089 16.1893 0.00770975C15.9862 0.0164004 15.7947 0.106727 15.6562 0.259108L9.97476 6.65966L6.06517 0.366904C5.99546 0.254513 5.89917 0.161963 5.78524 0.0978258C5.67131 0.0336891 5.54342 4.12695e-05 5.41341 9.35902e-08H0.778684C0.640184 -6.88944e-05 0.504213 0.0380031 0.385009 0.110229C0.265806 0.182456 0.167754 0.286179 0.101122 0.410539C0.0344904 0.534899 0.00172891 0.67532 0.00626836 0.817099C0.0108078 0.958879 0.0524812 1.0968 0.126925 1.21642L6.17139 10.9448L0.207067 17.6698C0.137418 17.7464 0.0833104 17.8364 0.0478814 17.9346C0.0124525 18.0328 -0.00359373 18.1373 0.00067335 18.2419C0.00494043 18.3465 0.029436 18.4492 0.0727396 18.544C0.116043 18.6388 0.177294 18.7239 0.252942 18.7943C0.32859 18.8647 0.41713 18.9191 0.513432 18.9542C0.609733 18.9893 0.71188 19.0045 0.813952 18.9989C0.916024 18.9932 1.01599 18.9669 1.10806 18.9214C1.20013 18.8759 1.28246 18.8122 1.3503 18.7339L7.03171 12.3333L10.9413 18.6261C11.0116 18.7375 11.1081 18.8291 11.222 18.8924C11.3359 18.9556 11.4635 18.9885 11.5931 18.988H16.2278C16.3661 18.988 16.5019 18.9499 16.621 18.8777C16.7401 18.8055 16.838 18.7019 16.9046 18.5777C16.9712 18.4535 17.004 18.3133 16.9996 18.1717C16.9952 18.03 16.9537 17.8922 16.8795 17.7726ZM12.0169 17.4057L2.18552 1.58234H4.98567L14.8209 17.4057H12.0169Z" fill="black" />
                </svg>
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="hover:opacity-70 bg-[#F5F5F5] rounded-full p-2"
            >
                <LinkedinIcon size={20} />
            </a>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(url);
                }}
                aria-label="Copy link"
                className="hover:opacity-70 bg-[#F5F5F5] rounded-full p-2"
            >
                <Link size={20} />
            </button>
        </div>
    );
};

export default ShareButtons;
