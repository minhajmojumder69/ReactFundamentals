import { useState } from "react";

const MoodTracker = () => {
    const messages = {
        "Sad": "Mon khrp? aktu brk neo",
        "Senti": "Thikase cholche choluk..",
        "Happy": "Vloii lagche jene valo laglo.",
        "Enjoy": "Dharun:! in energy dhore rakho..",
        "Amaizing": "Aj tmr din ta osadharon.."
    };

    const [selecteMood,setseleteMood] = useState(null);


    const messageKey = Object.keys(messages);
    // console.log(messageKey,'messagekey')
    return (
        <div className="moodTracker">
            <div className="emoji-tracker">
                {
                messageKey.map(emoji=> {
                    return <button onClick={()=> setseleteMood(emoji)}>{emoji}</button>
                })
            }
            </div>
            <p>{messages[selecteMood]}</p>
        </div>
    );
};

export default MoodTracker;