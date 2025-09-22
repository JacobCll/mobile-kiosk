"use client";

import { useState } from "react";

export default function Home() {
  const [mic, setMic] = useState(false);
  const [recordings, setRecordings] = useState([]);

  let onClick;

  if (navigator.mediaDevices.getUserMedia) {
    let onSuccess = (stream: MediaStream) => {
      const mediaRecorder = new MediaRecorder(stream);

      onClick = () => {
        if (mic) {
          mediaRecorder.stop();
          console.log("Recorder stopped");
        } else if (!mic) {
          mediaRecorder.start();
          console.log("Recording started");
        }
      };

      mediaRecorder.onstop = (e) => {
        const clipName = prompt(
          "Enter a name for your sound clip?",
          "My unnamed clip"
        );
      };
    };
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(onSuccess);
  } else {
    console.log("getUserMedia not supported by browser");
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center align-middle">
        <button
          className={`cursor-pointer w-15 h-9 rounded-lg border-1 ${
            mic ? "bg-red-400" : "bg-green-400"
          }`}
          onClick={() => setMic(!mic)}
        >
          {mic ? "Stop" : "Start"}
        </button>
        <div>
          <p className="mb-3">Recordings</p>
          <ol>
            {recordings.map((v, i) => (
              <li key={i}>
                <audio controls></audio>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
