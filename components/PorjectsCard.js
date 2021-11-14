import Image from 'next/image'
import cn from 'classnames'
import projectList from '@/components/projects/projects.data'

export default function PorjectsCard() {
    const projects = projectList.slice(0, 3)
    return (
        <div className='mt-6 px-2 mb-2'>
            {projects.map((project) => (
                <div 
                    key={project.id}
                    className={cn(
                        project.isReversed
                            ? 'flex-row-reverse'
                            : 'flex-row',
                        'flex items-center justify-between my-8'
                    )}
                >
                    <div className='hidden sm:inline-flex'>
                        <a target="_blank" href={project.liveProject} rel="noopener noreferrer">
                            <Image
                                width={238}
                                height={135}
                                src={project.imgSrc}
                                alt={project.altText}
                            />
                        </a>
                    </div>
                    <div className='sm:w-3/5'>
                        <h5 className={cn(
                            project.isReversed
                                ? 'text-center sm:text-left'
                                : 'text-center sm:text-right',
                            'text-tiny uppercase font-semibold tracking-widest mb-1 text-blue-700 dark:text-blue-400'
                        )}>
                            Featured Project
                        </h5>
                        <a target="_blank" href={project.liveProject} rel="noopener noreferrer">
                            <h4
                                className={cn(
                                    project.isReversed
                                        ? 'text-center sm:text-left'
                                        : 'text-center sm:text-right',
                                    'text-3xl font-semibold mb-2 cursor-pointer text-gray-800 dark:text-gray-200'
                            )}>
                                {project.title}
                            </h4>
                        </a>
                        <div className='bg-gray-200 dark:bg-gray-800 p-4 rounded-lg'>
                            <p className='text-sm text-gray-700 dark:text-gray-300 text-justify'>{project.description}</p>
                        </div>
                        <div className='flex items-center mt-2 justify-center'>
                            {project.techStack.map((ts, i) => (
                                <p 
                                    key={i} 
                                    className='mx-1 text-xs text-gray-600 dark:text-gray-400'
                                >
                                    {ts}
                                </p>
                            ))}
                        </div>
                        <div className='flex items-center mt-3 justify-center'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.githubRepo}
                                className='project-button'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 ml-1">
                                    <title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.liveProject}
                                className='project-button'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 ml-1">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
