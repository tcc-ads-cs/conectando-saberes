import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <div className="mBottom-16">
            <label htmlFor="inputPalavrasChave">Alcance mais pessoas inserindo palavras-chave:</label>
            <div className="inputsKW">
                <input
                    type="text"
                    id="inputPalavrasChave"
                    className="input inputKeywords"
                    placeholder="Adicionar Palavra-chave"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddKeyword();
                        }
                    }}
                    required
                />
                <button type='button' onClick={handleAddKeyword} className="btnKeyword"><AddIcon /></button>
            </div>
        </div>
        <div>
            {keywords.map((keyword) => (
                <div key={keyword} className="kwSelecionada mBottom-16">
                    {keyword}
                    <button type='button' className="btnKeyword" onClick={() => handleDeleteKeyword(keyword)}><DeleteIcon /></button>
                </div>
            ))}
        </div>
    </>
};

export default InputPalavrasChave;
  
  