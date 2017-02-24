/**
 * Created by Yun on 2016-12-10.
 */
import React, {Component, PropTypes} from 'react';

export default class FormProvider extends Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        form: PropTypes.object,
        children: PropTypes.element.isRequired,
    };

    //此处的数据可以越级传递，子组件都能通过定义 contextTypes 访问 context 中的数据```this.context.form
    //http://www.tuicool.com/articles/m2muAbU
    static childContextTypes = {
        form: PropTypes.object,
    };

    getChildContext() {
        return {
            form: this.props.form,
        };
    }

    render() {
        return React.Children.only(this.props.children);//返回唯一的子元素否则报错
    }
}
