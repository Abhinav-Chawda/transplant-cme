const Speaker_img = (props) => {
    return (
        <div className="flex justify-center h-full">
            <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full group border border-gray-100'>
                <div className='relative aspect-square overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                        src={props.image} 
                        alt={`${props.name}`}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className='p-6 space-y-4 relative'>
                    <h3 className='text-xl font-bold text-gray-900 text-center group-hover:text-blue-900 transition-colors'>
                        {props.name}
                    </h3>
                    <div className='space-y-2 text-center'>
                        {props.post && (
                            <p className='text-gray-700 font-medium leading-relaxed'>
                                {props.post}
                            </p>
                        )}
                        {props.post2 && (
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {props.post2}
                            </p>
                        )}
                        {props.post3 && (
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {props.post3}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speaker_img;