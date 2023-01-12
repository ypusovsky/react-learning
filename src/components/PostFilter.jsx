import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";

function PostFilter({filter, setFilter}) {
    return ( 
        <div>
            <MyInput 
                placeholder="Поиск..." 
                value={filter.query} 
                onChange={e => setFilter({...filter, query: e.target.value})}/>
            <br />    
            <MySelect 
                defaultValue='Сортировка' 
                options={
                    [
                        {title: 'По названию', value: 'title'},
                        {title: 'По значению', value: 'body'},
                    ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}  
            />
        </div> 
    );
}

export default PostFilter