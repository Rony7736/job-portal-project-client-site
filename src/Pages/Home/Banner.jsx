import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/team/team2.jpg"
import team2 from "../../assets/team/team1.jpg"

const Banner = () => {

    const Variants = {
        hidden: {
            height: 100,
            width: 100
        },
        visible: {
            color: ["#60F", "#09F", "#FA0"],
            transition: {
                delay: 1,
                duration: 2,
                ease: [0.075, 0.82, 0.165, 1],
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl" />

                    <motion.img src={team2}
                        animate={{ x: [100, 50, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl" />

                </div>
                <div className="flex-1">

                    <motion.h1
                        animate={{ x: 50, color: ['red'] }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">
                        Latest <motion.span
                            variants={Variants}
                            initial="hidden"
                            animate="visible"
                        // animate={{ color: ['yellow', 'green'] }}
                        // transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >  Jobs </motion.span>
                        For you!
                    </motion.h1>

                    {/* <motion.div
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                    ><h2>Hi</h2></motion.div> */}

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;