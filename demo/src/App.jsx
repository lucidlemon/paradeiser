import React from 'react';


class MenuItemForm extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            url: ''
        }
    }

    update(e){
        this.setState({
            title: this.refs.title.value,
            url: this.refs.url.value
        });
    }

    save(e){
        this.props.addItem(this.state);
    }

    render(){
        return(
        <div>
            <input type="text" ref="title" name="title" placeholder="New Menuitem" onChange={this.update.bind(this)} />
            <input type="text" ref="url" name="url" placeholder="/shop/" onChange={this.update.bind(this)} />
            <button onClick={this.save.bind(this)}>add</button>
        </div>
        );
    }
}

class ParadeiserMenuItem extends React.Component {
    render(){
        return (
            <a href={this.props.menuitem.url}>{this.props.menuitem.title}</a>
        );
    }
}

class Paradeiser extends React.Component {
    constructor(){
        super();
        var that = this;
        this.state = {
            menuitems: [
                {
                    title: 'home',
                    url: '/'
                },
                {
                    title: 'news',
                    url: '/news'
                },
                {
                    title: 'shop',
                    url: '/shop/'
                }
            ]
        }
    }

    addItem(item){
        var menuitems = this.state.menuitems;
        menuitems.push(item);
        this.setState({menuitems: menuitems});
    }

    render(){
        var items = [];

        this.state.menuitems.forEach(function(menuitem, i) {
            items.push(<ParadeiserMenuItem key={i} menuitem={menuitem} />);
        });

        return (
            <div id="wrapper">
                <nav className="paradeiser">
                    {items}
                </nav>
                <MenuItemForm addItem={this.addItem.bind(this)} />
            </div>
        );
    }
}

export default Paradeiser