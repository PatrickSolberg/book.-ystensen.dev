import React from 'react'
import { getReadingTime } from '../consts'
import { ExitIcon, ClockIcon } from '@radix-ui/react-icons'

interface Props {
    post: {
        url?: string;
        frontmatter: {
            title: string;
            description: string;
            heroImage: string;
            pubDate: string;
            author: string;
        };
    }
}

const ListPost = ({ post }: Props) => {
    const {
        frontmatter: { heroImage, description, title, pubDate, author },
    } = post;

    const time = 'Unknown'

    return (
        <li className='grid box-border my-12 items-center grid-cols-2 gap-4 max-sm:grid-flow-row max-[1200px]:grid-cols-1 max-md:gap-12 font-Montserrat'>
            <a href={post.url}>
                {heroImage ? (
                    <div className='border border-slate-700 shadow-sm dark:border-brand-blue rounded-xl max-h-[720px] w-full overflow-hidden'>
                        <img
                            src={heroImage}
                            alt={description}
                            className='object-cover h-full w-full max-h-[301px]'
                        />
                    </div>
                ) : (
                    <div className='min-h-full'>
                        <ExitIcon />
                    </div>
                )}
            </a>
            {description && (
                <div>
                    <a href={post.url || '404'} className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-brand-purple dark:hover:decoration-brand-blue'>
                        <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-flex'>{title}</h1>
                    </a>
                    <p>Author: <a href={author} className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-brand-purple dark:hover:decoration-brand-blue'><span className='italic text-xl'>{author || 'unknown'}</span></a></p>
                    <p className='truncate italic'>"{description}"</p>
                    <div className='flex gap-4'>
                        <p className=''>Published: {pubDate}</p>
                        <div className='inline-flex items-center gap-1 underline underline-offset-4'>
                            <ClockIcon /> {time} min read
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}
export default ListPost