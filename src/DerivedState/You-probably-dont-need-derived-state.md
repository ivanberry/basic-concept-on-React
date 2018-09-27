## 衍生状态

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

`getDerivedStateFromProps`存在的唯一理由就是：依据**props**变化更新组件状态。




































