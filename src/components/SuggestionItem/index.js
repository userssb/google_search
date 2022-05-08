import'./index.css

const SuggestionItem = props => {
    const {suggestionDetails,updateSearchInput}=this.props
    const {suggestion}=suggestionDetails

    const onSearchGoogle =()=>{
        updateSearchInput(suggestion)
    }

    <li className='suggestion-item'>
        <p className='text'>{suggestion}</p>
        <button type='button' onClick='onSearchGoogle'>
            <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' className='arrow' alt='arrow'/>
        </button>
    </li>
}
export default SuggestionItem
