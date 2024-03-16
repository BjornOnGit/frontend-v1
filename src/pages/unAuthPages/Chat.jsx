import MessageBox from "../../components/MessageBox"
import { useForm } from 'react-hook-form';
const dummyProfile = "data:image/jpeg;base64,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"

const dummyMessages = [
    {
        id: "1",
        textMessage: "hdhdh",
        isMyMessage: true,
        userProfile: dummyProfile
    },
    {
        id: "2",
        textMessage: "hdfgvchs nbxhsdbvcshn ",
        isMyMessage: false,
        userProfile: dummyProfile
    }
    ,
    {
        id: "3",
        textMessage: "chvhdsj",
        isMyMessage: false,
        userProfile: dummyProfile
    }
    ,
    {
        id: "4",
        textMessage: "madlcmlmc",
        isMyMessage: true,
        userProfile: dummyProfile
    }
    ,
    {
        id: "5",
        textMessage: "uiuu",
        isMyMessage: true,
        userProfile: dummyProfile
    }
    ,
    {
        id: "6",
        textMessage: "hdgsvc",
        isMyMessage: false,
        userProfile: dummyProfile
    },
    {
        id: "7",
        textMessage: "madlcmlmc",
        isMyMessage: true,
        userProfile: dummyProfile
    }
    ,
    {
        id: "8",
        textMessage: "uiuu",
        isMyMessage: true,
        userProfile: dummyProfile
    }
    ,
    {
        id: "9",
        textMessage: "hdgsvc",
        isMyMessage: false,
        userProfile: dummyProfile
    }
]

const Chat = () => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        const payload = {
            textMessage: data.textMessage,

        };
        console.log("payload", payload)
    };
    return (
        <div className="px-5 md:px-24 mt-10 relative">
            <div className=" w-full overflow-y-scroll p-10 h-[calc(100vh-200px)] mt-5 rounded-xl shadow ">


                {dummyMessages.map(({ id, isMyMessage, textMessage, userProfile }) => {
                    return (
                        <div className="m-1 mb-10" key={id}>
                            <MessageBox
                                isMyMessage={isMyMessage}
                                textMessage={textMessage}
                                dummyProfile={userProfile} />
                        </div>
                    )
                })}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full flex items-center justify-center'
                >

                    <fieldset className=' absolute w-[80%] flex bottom-3'>

                        <input
                            type='text'
                            name='textMessage'
                            id='textMessage'
                            placeholder='type here'
                            {...register('textMessage', { required: 'This field is required' })}
                            className='h-[4rem] w-full  px-5 border-grey-900 border outline-none bg-grey-800 rounded-l-md'
                        />
                        <span className='text-red-900 text-xl'>
                            {errors?.textMessage?.message}
                        </span>
                        <button className="bg-green-900 w-64 pr-5 rounded-r-md">send</button>
                    </fieldset>

                </form>
            </div>
        </div>
    )
}

export default Chat