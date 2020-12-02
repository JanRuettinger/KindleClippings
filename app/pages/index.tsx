import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);
  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);
  const [fileParsedContent, setFileParsedContent] = useState<Map<
    any,
    any
  > | null>(null);

  const parseFile = (file: string) => {
    const splittedFile = file.split(/\r?\n/g);
    // console.log(splittedFile.length);
    const Notes = new Map();
    let blockCounter = 0;
    while (blockCounter < Math.floor(splittedFile.length / 5)) {
      // parse block of 5 lines
      const title = splittedFile[blockCounter * 5 + 0];
      const clippingType = splittedFile[blockCounter * 5 + 1];
      const Note = splittedFile[blockCounter * 5 + 3];
      blockCounter += 1;

      if (clippingType.includes('Highlight')) {
        // add block to dict
        if (Notes.has(title)) {
          const oldNote = Notes.get(title);
          const newNote = `${oldNote}\n\n${Note}`;
          Notes.set(title, newNote);
        } else {
          Notes.set(title, Note);
        }
      }
    }
    return Notes;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      // setFileContent(reader.result as string);
      setFileParsedContent(parseFile(reader.result as string));
    };

    reader.onerror = () => {
      // console.log(reader.error);
    };

    setFileName(file.name);
  };

  // const copyToClipboard = (e) => {
  //   if(textAreaRef){

  //   }
  //   textAreaRef.current.select();
  //   document.execCommand('copy');
  //   // This is just personal preference.
  //   // I prefer to not show the the whole text area selected.
  //   e.target.focus();
  //   setCopySuccess('Copied!');
  // };

  const printNoteMap = (key: string, value: string) => {
    return (
      <div className="mt-4 bg-white overflow-hidden sm:rounded-lg sm:shadow">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6  text-gray-900 font-sans font-semibold">
            {key}
          </h3>
        </div>
        {/* {document.queryCommandSupported('copy') && (
          <div>
            <button
              className="rounded-md border-2 p-2"
              type="button"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        )} */}
        <div className="whitespace-pre-line px-4 py-5 sm:px-6 font-light">
          {/* <form>
            <textarea ref={textAreaRef} value={value} />
          </form> */}
          {value}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Kindle Clippings Parser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-8 text-2xl text-center font-test font-bold">
            Welcome friends of LibGen!
          </h1>
          <div className="mt-2">
            This is a simple tool I built for my roommate{' '}
            <a
              href="https://www.jandamm.me"
              className="text-blue-700 underline font-bold"
            >
              Jan Damm
            </a>
            . It parses your Kindle{' '}
            <span className="bg-red-200">Clippings.txt</span> file and outputs
            all your notes in a clean format so that you can copy your notes
            more easily to other tools like Notion.
          </div>
          <div className="mt-8">
            <input type="file" accept=".txt" onChange={handleFileUpload} />
            Uploaded File: {fileName}
            <div className="mt-4">
              <h2>Parsed File:</h2>
              {fileParsedContent !== null
                ? [...fileParsedContent.keys()].map((noteTitle) => {
                    return printNoteMap(
                      noteTitle,
                      fileParsedContent.get(noteTitle)
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
}
