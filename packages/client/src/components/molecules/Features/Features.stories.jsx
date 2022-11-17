import React from 'react';

import Features from '.';

export default {
    title: 'molecules/Features',
    component: Features,
    argTypes: {
    },
};

const Template = (args) => <Features {...args} />;

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