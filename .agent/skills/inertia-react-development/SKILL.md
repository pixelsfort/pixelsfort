---
name: inertia-react-development
description: >-
  Develops Inertia.js v3 React client-side applications. Activates when creating React pages, forms, or navigation;
  using <Link>, <Form>, useForm, useHttp, setLayoutProps, or router; working with deferred props, prefetching,
  optimistic updates, instant visits, or polling; or when user mentions React with Inertia, React pages, React forms, or React navigation.
---

# Inertia React Development

## Description
This skill guides the design, implementation, and refactoring of Inertia.js v3 React client-side applications. It provides operational patterns for page component structures, form handling (`<Form>`, `useForm`, `useHttp`), navigation (`<Link>`, `router`), and v3 reactive features such as optimistic updates, deferred props, instant visits, layout props, polling, and infinite scrolling.

## System Instructions

### When to Apply
Activate this skill when:
- Creating or modifying React page components for Inertia
- Working with forms in React (using `<Form>`, `useForm`, or `useHttp`)
- Implementing client-side navigation with `<Link>` or `router`
- Using v3 features: deferred props, prefetching, optimistic updates, instant visits, layout props, HTTP requests, WhenVisible, InfiniteScroll, once props, flash data, or polling
- Building React-specific features with the Inertia protocol

### Documentation
Use `search-docs` for detailed Inertia v3 React patterns and documentation.

### Basic Usage

#### Page Components Location
React page components should be placed in the `resources/js/pages` directory.

#### Page Component Structure
```react
export default function UsersIndex({ users }) {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}
```

### Client-Side Navigation

#### Basic Link Component
Use `<Link>` for client-side navigation instead of traditional `<a>` tags:
```react
import { Link, router } from '@inertiajs/react'

<Link href="/">Home</Link>
<Link href="/users">Users</Link>
<Link href={`/users/${user.id}`}>View User</Link>
```

#### Link with Method
```react
import { Link } from '@inertiajs/react'

<Link href="/logout" method="post" as="button">
    Logout
</Link>
```

#### Prefetching
Prefetch pages to improve perceived performance:
```react
import { Link } from '@inertiajs/react'

<Link href="/users" prefetch>
    Users
</Link>
```

#### Programmatic Navigation
```react
import { router } from '@inertiajs/react'

function handleClick() {
    router.visit('/users')
}

// Or with options
router.visit('/users', {
    method: 'post',
    data: { name: 'John' },
    onSuccess: () => console.log('Success!'),
})
```

### Form Handling

#### Form Component (Recommended)
The recommended way to build forms is with the `<Form>` component:
```react
import { Form } from '@inertiajs/react'

export default function CreateUser() {
    return (
        <Form action="/users" method="post">
            {({ errors, processing, wasSuccessful }) => (
                <>
                    <input type="text" name="name" />
                    {errors.name && <div>{errors.name}</div>}

                    <input type="email" name="email" />
                    {errors.email && <div>{errors.email}</div>}

                    <button type="submit" disabled={processing}>
                        {processing ? 'Creating...' : 'Create User'}
                    </button>

                    {wasSuccessful && <div>User created!</div>}
                </>
            )}
        </Form>
    )
}
```

#### Form Component With All Props
```react
import { Form } from '@inertiajs/react'

<Form action="/users" method="post">
    {({
        errors,
        hasErrors,
        processing,
        progress,
        wasSuccessful,
        recentlySuccessful,
        clearErrors,
        resetAndClearErrors,
        defaults,
        isDirty,
        reset,
        submit
    }) => (
        <>
            <input type="text" name="name" defaultValue={defaults.name} />
            {errors.name && <div>{errors.name}</div>}

            <button type="submit" disabled={processing}>
                {processing ? 'Saving...' : 'Save'}
            </button>

            {progress && (
                <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                </progress>
            )}

            {wasSuccessful && <div>Saved!</div>}
        </>
    )}
</Form>
```

#### Form Component Reset Props
The `<Form>` component supports automatic resetting:
- `resetOnError` - Reset form data when the request fails
- `resetOnSuccess` - Reset form data when the request succeeds
- `setDefaultsOnSuccess` - Update default values on success

Use the `search-docs` tool with a query of `form component resetting` for detailed guidance.

```react
import { Form } from '@inertiajs/react'

<Form
    action="/users"
    method="post"
    resetOnSuccess
    setDefaultsOnSuccess
>
    {({ errors, processing, wasSuccessful }) => (
        <>
            <input type="text" name="name" />
            {errors.name && <div>{errors.name}</div>}

            <button type="submit" disabled={processing}>
                Submit
            </button>
        </>
    )}
</Form>
```

#### `useForm` Hook
For more programmatic control or to follow existing conventions, use the `useForm` hook:
```react
import { useForm } from '@inertiajs/react'

export default function CreateUser() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/users', {
            onSuccess: () => reset('password'),
        })
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={data.name}
                onChange={e => setData('name', e.target.value)}
            />
            {errors.name && <div>{errors.name}</div>}

            <input
                type="email"
                value={data.email}
                onChange={e => setData('email', e.target.value)}
            />
            {errors.email && <div>{errors.email}</div>}

            <input
                type="password"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
            />
            {errors.password && <div>{errors.password}</div>}

            <button type="submit" disabled={processing}>
                Create User
            </button>
        </form>
    )
}
```

### Inertia v3 Features

#### HTTP Requests (`useHttp`)
Use the `useHttp` hook for standalone HTTP requests that do not trigger Inertia page visits:
```react
import { useHttp } from '@inertiajs/react'

export default function Search() {
    const { data, setData, get, processing } = useHttp({
        query: '',
    })

    function search(e) {
        setData('query', e.target.value)
        get('/api/search', {
            onSuccess: (response) => {
                console.log(response)
            },
        })
    }

    return (
        <>
            <input value={data.query} onChange={search} />
            {processing && <div>Searching...</div>}
        </>
    )
}
```

#### Optimistic Updates
Apply data changes instantly before the server responds, with automatic rollback on failure:
```react
import { router } from '@inertiajs/react'

function like(post) {
    router.optimistic((props) => ({
        post: {
            ...props.post,
            likes: props.post.likes + 1,
        },
    })).post(`/posts/${post.id}/like`)
}
```

Optimistic updates also work with `<Form>`:
```react
import { Form } from '@inertiajs/react'

<Form
    action="/todos"
    method="post"
    optimistic={(props, data) => ({
        todos: [...props.todos, { id: Date.now(), name: data.name, done: false }],
    })}
>
    <input type="text" name="name" />
    <button type="submit">Add Todo</button>
</Form>
```

#### Instant Visits
Navigate to a new page immediately without waiting for the server response:
```react
import { Link } from '@inertiajs/react'

<Link href="/dashboard" component="Dashboard">Dashboard</Link>
<Link
    href="/posts/1"
    component="Posts/Show"
    pageProps={{ post: { id: 1, title: 'My Post' } }}
>
    View Post
</Link>
```

#### Layout Props
Share dynamic data between pages and persistent layouts:
```react
import { setLayoutProps } from '@inertiajs/react'

export default function Dashboard() {
    setLayoutProps({
        title: 'Dashboard',
        showSidebar: false,
    })

    return <h1>Dashboard</h1>
}
```

#### Deferred Props
Load data after initial page render with skeleton states:
```react
export default function UsersIndex({ users }) {
    return (
        <div>
            <h1>Users</h1>
            {!users ? (
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
```

#### Polling (`usePoll`)
```react
import { usePoll } from '@inertiajs/react'

export default function Dashboard({ stats }) {
    usePoll(5000)

    return (
        <div>
            <h1>Dashboard</h1>
            <div>Active Users: {stats.activeUsers}</div>
        </div>
    )
}
```

#### WhenVisible
Lazy-load a prop when an element scrolls into view:
```react
import { WhenVisible } from '@inertiajs/react'

export default function Dashboard({ stats }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <WhenVisible data="stats" buffer={200} fallback={<div className="animate-pulse">Loading stats...</div>}>
                {({ fetching }) => (
                    <div>
                        <p>Total Users: {stats.total_users}</p>
                        <p>Revenue: {stats.revenue}</p>
                        {fetching && <span>Refreshing...</span>}
                    </div>
                )}
            </WhenVisible>
        </div>
    )
}
```

#### InfiniteScroll
```react
import { InfiniteScroll } from '@inertiajs/react'

export default function Users({ users }) {
    return (
        <InfiniteScroll data="users">
            {users.data.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </InfiniteScroll>
    )
}
```

### Common Pitfalls
- Using traditional `<a>` links instead of Inertia's `<Link>` component (breaks SPA behavior)
- Forgetting to add loading states (skeleton screens) when using deferred props
- Not handling the `undefined` state of deferred props before data loads
- Using `<form>` without preventing default submission (use `<Form>` component or `e.preventDefault()`)
- Using `router.cancel()` instead of `router.cancelAll()` (v3 breaking change)
- Using `router.on('invalid', ...)` or `router.on('exception', ...)` instead of `httpException` and `networkError`
