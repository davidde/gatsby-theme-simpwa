import React from "react"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    require('./themes/theme-' + theme + '.scss');

    this.state = {
      leftActive: false,
      rightActive: false,
      isMediumViewport: null,
    }
    // To fix build problem:
    if (typeof window !== `undefined`) {
      this.isMediumViewport();
    }
    // Note:
    // This is the first commit that exhibits an empty view in the browser for production build.
    // Development builds are fine.
    // Diff to check differences with previous commit:
    // git diff 4350d9acc524 52d6a8e8d9f
  }

  componentDidMount() {
    window.addEventListener("resize", this.isMediumViewport);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.isMediumViewport);
  }

  isMediumViewport = () => {
    let mediumWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--mediumWidthQuery');
    let isMediumViewport = window.matchMedia(mediumWidthQuery).matches;

    if (this.state.isMediumViewport === null) {
      // Init in constructor:
      // eslint-disable-next-line
      this.state.isMediumViewport = isMediumViewport;
    } else if (this.state.isMediumViewport !== isMediumViewport) {
      this.setState({ isMediumViewport });
    }
    // If both sides are active in medium viewport, unactivate one side:
    if (this.state.leftActive && this.state.rightActive && isMediumViewport) {
      this.setState({ rightActive: false });
    }
  }

  toggleLeftSidebar = () => {
    this.setState({leftActive: !this.state.leftActive});

    // If other side is active in medium viewport, unactivate other side:
    if (this.state.rightActive && this.state.isMediumViewport) {
      this.setState({ rightActive: false });
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport, unactivate other side:
    if (this.state.leftActive && this.state.isMediumViewport) {
      this.setState({ leftActive: false });
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.name === 'Leftside') {
            return React.cloneElement(child, {
                isActive: this.state.leftActive,
                toggleSidebar: this.toggleLeftSidebar,
            });
        } else if (child.type.name === 'Rightside') {
            return React.cloneElement(child, {
              isActive: this.state.rightActive,
              toggleSidebar: this.toggleRightSidebar,
            });
        } else if (child.type.name === 'Main') {
          return React.cloneElement(child, {
            leftActive: this.state.leftActive,
            rightActive: this.state.rightActive,
          });
        } // else return child;
      }
    );

    return (
      <div id='layout'>

        {childrenWithProps}

      </div>
    )
  }
}

export default Layout;