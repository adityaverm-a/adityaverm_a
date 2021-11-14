import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center items-center w-full my-8'>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className='flex items-center mt-3 justify-center'>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='project-button'
                    href='https://github.com/adityaverm-a'
                >
                    <GithubIcon />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='project-button'
                    href='https://www.instagram.com/adityaverm_a/?hl=en'
                >
                    <InstagramIcon />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='project-button'
                    href='https://www.linkedin.com/in/aditya-verma-802110185/'
                >
                    <LinkedinIcon />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='project-button'
                    href='https://twitter.com/adityaverm_a?s=09'
                >
                    <TwitterIcon />
                </a>
                
            </div>
            {/* <h3>adityaverm-a</h3> */}
        </footer>
    )
}

