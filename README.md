# alpha-editable-text-react-native
## Installation

```
npm i --save react-native-lightbox
```
## Usage 
```js
import EditableText from './EditableText/EditableText';
<EditableText
                        value={this.state.name}
                        fontSize={12}
                        color={black50}
                        width={350}
                        multiline={true}
                        maxLength={128}
                        numberOfLines={4}
                        textAlign='justify'
                        Validate={(val)=>{
                            if(val==''){
                                return {'err':true,'msg':'Fill bio'}
                            }
                            return{'err':false,'msg':''}
                        }}
                        borderBottomColor='red'
                        borderBottomWidth={1}
                        ChangedValue={(val)=>{
                           this.setState({name:val})
                        }}
                        />
```
## Example

Check full example in the `Example` folder.
## License
© Ronak Dholariya
