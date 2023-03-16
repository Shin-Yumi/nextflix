import { Movie } from '@/typings';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Thumbnail from '@/components/Thumbnail';

interface Props {
	title: string;
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	return (
		<article className='h-40 space-y-0.5 md:space-y-2 relative z-[4]'>
			{/* title */}
			<h2 className='w-50 text-base font-semibold text-[#e5e5e5] transition duration-[0.3] hover:text-white md:text-2xl'>
				{title}
			</h2>

			<div className='group relative h-[100px] '>
				{/* left btn */}
				<FaAngleLeft className='absolute top-0 bottom-0 left-2 z-[4] m-auto h-9 cursor-pointer opacity-[0] transition hover:scale-[1.5] group-hover:opacity-[1]' />

				{/* Thumbnails */}
				<div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
					{movies.map((movie) => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</div>

				{/* right btn */}
				<FaAngleRight className='absolute top-0 bottom-0 right-2 z-[4] m-auto h-9 cursor-pointer opacity-[0] transition hover:scale-[1.5] group-hover:opacity-[1]' />
			</div>
		</article>
	);
}

export default Row;