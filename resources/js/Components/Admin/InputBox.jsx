import {forwardRef, useEffect, useRef} from 'react';

export default forwardRef(function InputBox({
                                                btn,
                                                iconPrev,
                                                coin,
                                                type = 'text',
                                                className = '',
                                                isFocused = false,
                                                id = "input-id",
                                                classes = '',
                                                label = "",
                                                error = "",
                                                ...props
                                            }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (


        <div
            className={`${classes} flex flex-col gap-y-2 justify-start overflow-hidden`}>
            {label && <label className="text-left text-sm lg:text-md text-text-primary" htmlFor={id}>{label}</label>}
            <input
                {...props} type={type}
                className='w-full h-[26px] rounded sm:rounded-[6px] sm:h-9 block border-none focus:ring-0 bg-side-and-button placeholder:text-t-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:leading-[14px] sm:placeholder:leading-[20px] text-xs sm:text-sm text-t-secondary leading-[14px] sm:leading-[20px]'
            />

            {error && <p className="text-warning text-sm">{error}</p>}

        </div>

    );
});
