import os

try:
    from anthropic import Anthropic
except ImportError:
    raise ImportError(
        "The anthropic package is not installed. "
        "Please install it using: pip install anthropic"
    )


def test_reverse_proxy():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    base_url = os.environ.get("ANTHROPIC_BASE_URL")
    model = os.environ.get("ANTHROPIC_MODEL")

    if not api_key:
        raise ValueError("ANTHROPIC_API_KEY environment variable not set")
    if not base_url:
        raise ValueError("ANTHROPIC_BASE_URL environment variable not set")
    if not model:
        raise ValueError("ANTHROPIC_MODEL environment variable not set")

    client = Anthropic(api_key=api_key, base_url=base_url)

    print(f"Testing with base URL: {base_url}")
    print(f"Model: {model}")
    print()

    request_1_success = False
    request_2_success = False

    print("=" * 60)
    print("Request 1: Sending request WITHOUT tools...")
    print("=" * 60)

    try:
        response_1 = client.messages.create(
            model=model,
            max_tokens=1024,
            messages=[{"role": "user", "content": "Hello"}],
        )
        request_1_success = True
        print("✓ Request 1 SUCCESS")
        print(f"  Response ID: {response_1.id}")
        print(f"  Model: {response_1.model}")
    except Exception as e:
        print("✗ Request 1 FAILED")
        print(f"  Error: {e}")

    print()
    print("=" * 60)
    print('Request 2: Sending request WITH "read" tool...')
    print("=" * 60)

    try:
        response_2 = client.messages.create(
            model=model,
            max_tokens=1024,
            tools=[
                {
                    "name": "read",
                    "description": "Read a file",
                    "input_schema": {
                        "type": "object",
                        "properties": {
                            "file_path": {
                                "type": "string",
                                "description": "Path to the file",
                            }
                        },
                        "required": ["file_path"],
                    },
                }
            ],
            messages=[{"role": "user", "content": "Hello"}],
        )
        request_2_success = True
        print("✓ Request 2 SUCCESS")
        print(f"  Response ID: {response_2.id}")
        print(f"  Model: {response_2.model}")
    except Exception as e:
        print("✗ Request 2 FAILED")
        print(f"  Error: {e}")

    print()
    print("=" * 60)
    print("CONCLUSION")
    print("=" * 60)

    if not request_1_success:
        print("❌ Configuration problem: First request failed.")
        print("   Please check your API key and base URL.")
    elif request_1_success and not request_2_success:
        print("⚠️  You are using a REVERSE PROXY service.")
        print('   The proxy does not support lowercase "read" tool name.')
        print("   Consider using official Anthropic API or a different proxy.")
    elif request_1_success and request_2_success:
        print("✓ You are using the OFFICIAL Anthropic API.")
        print("   Both requests succeeded, no issues detected.")


if __name__ == "__main__":
    test_reverse_proxy()
