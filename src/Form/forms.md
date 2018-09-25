## Forms

Form元素在HTML元素中是比较特殊的一类，它有自己的状态。

```html
<form action="">
	<label for="">
		Name:
		<input type="text" name="name">
	</label>
	<input type="submit" value="submit">
</form>
```

当用户在form中输入对应的值时，我们是可以获取的这个值的，当点击提交按钮时，默认会导向新的页面。在React中，我们更常用
的办法可能是通过**受控组件**，来实现表单的提交。

### 受控组件

HTML中，诸如`input`, `textarea`和`select`是典型的拥有自己状态的元素，它们的值会通过用户的输入而得到更新，在React中
可修改的状态一般都保存在组件的`state`属性中，并只能通过`setState`更新。我们通过使React状态是‘单一数据源’来使得二者结合。
之后，React组件既负责渲染渲染表单同时有接管用户输入，维护表单的内部状态。通过这种形式，由React管理内部值的表单元素，常称为
“受控组件”。

一个例子：

```html
class NameForm extends from React.Component {
	constuctor(props) {
		super(props);
		this.state = {value: ''};
	}

	const handleChange(evt) {
		this.setState({value: evt.target.value});
	}

	const handleSubmit(evt) {
		alert('A name was submited: ' + this.state.value);
		evt.preventDefault();
	}

	render() {
		return (
			<form>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

```

上述例子中，表单元素的值`value`设置为React组件的状态值，它的值一直会是`this.state.value`。当用户输入时，`handleChange`会调用并更新React`state`。所以表单元素从UI上表现的值就会更用户输入同步。对受控组件而言，每一次修改都会调用对应的函数，这使得输入的修改和校验变得非常简单，比如我们要实现所有输入提交时，输入到变成全大写值：

```html
handleChange(evt) {
	this.setState({value: evt.target.value.toUpperCase()});
}
```

#### Textarea

HTML中，`teaxtarea`是通过子元素定义它的文本内容的。而React中，我们使用`value`属性代替。

#### Select

HTML中，`select`会为各种选项创建一个下拉列表：

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```
HTML中，options值的选择会通过option上`selected`属性来决定。React中，取而代之的是在`select`上，通过设置`value`的方式。

```html
class FlavorForm extends from React.Component {
	constuctor(props) {
		super(props);
		this.state({value: 'coconut'});
	}

	const handleChange = (evt) => {
		this.state({
			value: evt.target.value
		});
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert('你最喜欢的调料是?')
	}

	render() {
		return(
			<form>
				<label>
					请选择你最喜欢的调料品:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">grapefruit</option>
						<option value="lime">lime</option>
						<option value="coconut">coconut</option>
						<option value="mango">mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}
```

综上，React统一了`input`, `textarea`和`select`的行为，通过定义`value`属性，它们都可以实现为受控组件。

#### file input

HTML中，还有一类特殊的输入，文件上传`type=file`，通过`File`API，用户可以上传一个或多个文件到服务器。因为它的值是只读的，
在React中，它属于非受控组件。



























