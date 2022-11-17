import React from 'react';

import Blog from '.';

export default {
    title: 'Pages/Blog',
    component: Blog,
    argTypes: {
    },
};

const Template = (args) => <Blog {...args} />;

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