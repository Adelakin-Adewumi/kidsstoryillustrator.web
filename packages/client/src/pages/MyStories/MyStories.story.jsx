import React from 'react';

import MyStories from './MyStories';

export default {
    title: 'MyStories',
    component: MyStories,
    argTypes: {
    },
};

const Template = (args) => <MyStories {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
};

export const Small = Template.bind({});
Small.args = {
};