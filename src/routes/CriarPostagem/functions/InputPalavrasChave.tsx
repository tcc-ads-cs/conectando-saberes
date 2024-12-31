import { useState } from "react";

interface InputPalavrasChaveProps {
    keywords: string[];
    setKeywords: (keywords: string[]) => void;
  }

const InputPalavrasChave: React.FC<InputPalavrasChaveProps> = ({ keywords, setKeywords }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleAddKeyword = () => {
        if (inputValue.trim() && !keywords.includes(inputValue.trim())) {
            setKeywords([...keywords, inputValue.trim()]);
            setInputValue('');
        }
    };
  
    const handleDeleteKeyword = (keywordToDelete: string) => {
        setKeywords(keywords.filter((keyword) => keyword !== keywordToDelete));
    };
  
    return  <>
        <div>
            <label htmlFor="inputPalavrasChave" className="inputLabel">Insira palavras-chave para alcançar mais pessoas.</label>
            <input
                type="text"
                id="inputPalavrasChave"
                placeholder="Adicionar Palavra-chave"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddKeyword();
                    }
                }}
            />
                <button type='button' onClick={handleAddKeyword}>Adicionar</button>
            </div>
            <div>
                {keywords.map((keyword) => (
                    <div key={keyword}>
                        {keyword}
                        <button type='button' onClick={() => handleDeleteKeyword(keyword)}>Remover</button>
                    </div>
                ))}
        </div>
    </>
};

export default InputPalavrasChave;
  
  