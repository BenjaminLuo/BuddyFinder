<<<<<<< HEAD
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';
it('changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
=======
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';
it('changes the class when hovered', () => {
const component = renderer.create(
<Link page="http://www.facebook.com">Facebook</Link>,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
// manually trigger the callback
renderer.act(() => {
tree.props.onMouseEnter();
});
// re-rendering
tree = component.toJSON();
expect(tree).toMatchSnapshot();
// manually trigger the callback
renderer.act(() => {
tree.props.onMouseLeave();
});
// re-rendering
tree = component.toJSON();
expect(tree).toMatchSnapshot();
>>>>>>> 4d8f954917cc71f21658ee5a794d74f94682d2fd
});