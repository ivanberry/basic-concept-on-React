# 衍生状态

React16.4.0中修复了一些问题，其中就有关于衍生状态，生命周期函数中有一个在16中弃用了，是因为通过它做一些事情，使用不当很容易导致各种问题，我们后面说它`componentWillReceiveProps`，这边我们先说`getDerivedStateFromProps`。

`getDerivedStateFromProps`新版本中会在每次渲染中被调用，这与之前的版本存在差异，之前版本只仅会在因为父组件更新的重新渲染中调用，而不会对本地状态(`setState`)的更新而调用，前者跟`componentWillReceiveProps`更为相似，改进后的版本保证了与**异步渲染**模式的兼容。

除开以下的使用外，一般应用是不会受到这个bug的影响。

1. 副作用

和`render`函数类似，`getDerivedStateFromProps`应该是一个关于`prop`和`state`的纯函数，它不应该存在任何的副作用。

2. 根据prop变化计算差异

```javascript
static getDerivedStateFromProps(props, state) {
	if (props.value !== state.controlledValue) {
		return {
			// props, state都将调用函数，这样受控组件值一直会被覆盖
			controlledValue: props.value
		};
	}
	return null;
}
```

一种可能的办法就是将`prevProps`保存为本地状态。

```javascript
static getDerivedStateFromProps(props, state) {
	const prevProps = state.prevProps;
	// 比较新的props和当前Prop
	const controlledValue = prevProps.value !== props.value ? props.value : state.controlledValue;
	return {
		prevProps: props,
		controlledValue
	};
}
```

但是，在state中镜像props常导致各位问题，所以当使用新版本中的`getDerivedStateFromProps`还是传统的`componentWillReceiveProps`都可能导致各种问题，应该使用以下正文的办法。

在React长期版本中，`componentWillReciveProps`是唯一根据props变化而更新state，并不引发多余渲染的方法。16.3中新增了新的替代周期函数`getDerivedStateFromProps`，能更好完成类似的事情。再次同时，关于两个函数的使用，存在很多的误解和反模式。

### 什么时候需要衍生状态

`getDerivedStateFromProps`存在的唯一理由就是：依据**props**变化更新组件状态。关于衍生状态的问题可以归于两类：

- 来自props的无条件state更新
- 当props，state不匹配时的state更新

### 衍生状态使用可能导致的问题

受控和非受控一般特指表单输入框，同时它们也用来描述组件数据的来源。数据来源于props的一般称为受控组件，因为组件的数据受父组件控制，数据仅存在与内部状态可以称为非受控组件，因为父组件不能直接修改它。

关于衍生状态的最大误解就是混用了数据的受控与非受控。**衍生状态数据值又通过`setState`更新**，这样一来数据的来源就不唯一了，就很有可能导致各种问题。

#### 无限制的从prop复制数据到state

**当props变化**时，`getDerivedStateFromProps`和`componentWillReceiveProps`才会执行。它两会在父组件任意次渲染时执行，而不管props是否跟之前不同。正因如此，无限制的从props复制值到state是不安全的，因为父组件的更新会使得state被覆盖。使得state更新会丢失。

#### 当props变化时，重置state

我们可以在仅当`prop.email`变化时才更新`state`:

```javascript
componentWillReceiveProps(nextProps) {
  // Any time props.email changes, update state
  if (nextProps.email !== this.props.email) {
    this.setState({
      email: nextProps.email
    })
  }
}
```

上述办法是很大的改进了，组件只会在prop更新时才会重置组件state，但这种解决办法仍有不易察觉的问题存在。查看[demo](https://codesandbox.io/s/mz2lnkjkrx)

这是设计的根本性缺陷，我们可以通过两种方式更好的达到我们的需求，而它们的本质都是对**任意数据源而言，必须使用唯一的组件来承载，并避免在其他组件中复制它。**

#### 最佳实践

1. 完全受控组件

值是完全受控的，没有任何本地状态与props的冲突，这样我们甚至可以更加简化为函数组件。

```javascript
function EmailInput(props) {
	return <Input value={props.email} onChange={props.onChange} />;
}
```
上述的方式，能已更简单的形式实现我们的需求，但是存在一个小问题，假如我们需要‘草稿’的特性，我们只能从父组件的角度来手动实现。详情查看[demo](https://codesandbox.io/s/7154w1l551);

2. 完全非受控组件

另一种方式就是使得我们的组件是彻底的非受控组件，这种情况下，我们仅利用`propr`来获取组件的初始值，忽略掉prop后续的变化。

```javascript
class EmailInput extends React.Component {
	state = {
		email: this.props.defaultEmail
	}

	handleChange = (evt) => {
		this.setState = {
		email: evt.target.value
		}
	}

	render(
		return <input value={this.state.email} onChange={this.handleChange} />
	)
}
```

我们可以通过React动态渲染中常用到的`key`值，使当`key`不同时，`React`会新建组件实例，而不是直接修改。

```javascript
<EmailInput
	defaultEmail={this.props.user.emial}
	key={this.props.user.id}
/>
```

每次切换为不同的用户，因为`key`的不同，`React`会新建新的`EmailInput`组件实例，从而避免组件见数据污染，详情参见[demo](https://codesandbox.io/s/6v1znlxyxn)







































